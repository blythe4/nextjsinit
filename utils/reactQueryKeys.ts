/* react-query key 인터페이스 */
interface IQueryArrFn {
    (keyNm: string): string[];
}

interface IQueryArrListFn {
    (keyNm: string, filters: string): (string | object)[];
}

interface IQueryArrDetailFn {
    (keyNm: string, id: string | number): (string | number)[];
}

interface IQueryArr {
    all: IQueryArrFn;
    lists: IQueryArrFn;
    list: IQueryArrListFn;
    details: IQueryArrFn;
    detail: IQueryArrDetailFn;
}

export const QUERY_KEYS: IQueryArr = {
    all: (keyNm) => [keyNm],
    lists: (keyNm) => [keyNm, 'list'],
    list: (keyNm, filters) => [...QUERY_KEYS.lists(keyNm), { filters }],
    details: (keyNm) => [keyNm, 'detail'],
    detail: (keyNm, id) => [...QUERY_KEYS.details(keyNm), id],
};
