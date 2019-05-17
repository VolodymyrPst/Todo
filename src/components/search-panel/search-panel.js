import React from 'react';
import ItemStatusFilter from '../item-status-filter/item-status-filter.js'

const SearchPanel = () => {
	return(
		<input type='text'
			className="form-control search-input"
			placeholder="type to search" />
	);
};

export default SearchPanel;