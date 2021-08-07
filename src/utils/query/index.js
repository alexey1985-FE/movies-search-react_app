import * as queryString from 'querystring';

export const createQueryString = params => {
	return `?${queryString.stringify(params)}`;
};

export const getQueryObject = search => {
	return queryString.parse(search.replace('?', ''));
};
