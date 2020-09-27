import React from "react";

export const formatNavDataForDropDown = (initialData) => {
	return initialData.navCatagories.map((item) => {
		const category = { category: item.category_path };

		let dropDownImages = {};
		for (const element in item) {
			if (/dropdown_image/.test(element))
				dropDownImages[element] = item[element];
		}
		const handleColumnFilter = (column_number) => {
			return item.children_data
				.filter((child) =>
					column_number === 1
						? !child.include_in_menu_column2 && !child.include_in_menu_column3
						: column_number === 2
						? child.include_in_menu_column2 && !child.include_in_menu_column3
						: !child.include_in_menu_column2 && child.include_in_menu_column3
				)
				.map((child) => ({
					id: child.id,
					name: child.name,
					custom_name: child.custom_category_name,
					url_path: child.url_path,
					is_active: child.is_active,
					position: child.position,
				}));
		};

		return {
			...category,
			dropDownImages,
			column1: handleColumnFilter(1),
			column2: handleColumnFilter(2),
			column3: handleColumnFilter(3),
		};
	});
};
