import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types/index';
import { articleDetailsCommentsReducer } from '../slices/articleDetailsCommentsSlice';
import {
    articleDetailsPageRecommendationsReducer,
} from '../slices/articleDetailsPageRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsPageRecommendationsReducer,
});
