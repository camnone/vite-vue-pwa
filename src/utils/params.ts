export const getParams = (params: string) => {
	return new URLSearchParams(localStorage.getItem('params')!).get(params)
}
