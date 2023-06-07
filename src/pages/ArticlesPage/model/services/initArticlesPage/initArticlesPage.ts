import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleTypes } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('articlesPage/initArticlesPage', async (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const inited = getArticlesPageInited(getState());

    if (!inited) {
        const sortFromUrl = searchParams.get('sort') as ArticleSortField;
        const orderFromUrl = searchParams.get('order') as SortOrder;
        const searchFromUrl = searchParams.get('search');
        const typeFromUrl = searchParams.get('type') as ArticleTypes;

        if (sortFromUrl) {
            dispatch(articlesPageActions.setSort(sortFromUrl));
        }

        if (orderFromUrl) {
            dispatch(articlesPageActions.setOrder(orderFromUrl));
        }

        if (searchFromUrl) {
            dispatch(articlesPageActions.setSearch(searchFromUrl));
        }

        if (typeFromUrl) {
            dispatch(articlesPageActions.setType(typeFromUrl));
        }

        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesList({}));
    }
});
