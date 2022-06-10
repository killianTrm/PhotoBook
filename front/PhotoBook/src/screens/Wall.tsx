import React from 'react';
import {Image, RefreshControl, ScrollView, StyleSheet} from 'react-native';
import {domain} from '../api';
import NewArticle from '../posts/NewArticle';
import ArticleList from '../posts/ArticleList';
import {
  fetchAllArticles,
  selectArticleStatus,
} from '../redux/slices/articles.slice';
import {useAppDispatch, useAppSelector} from '../redux/hooks';

const Wall = () => {
  const dispatch = useAppDispatch();
  const articleStatus = useAppSelector(selectArticleStatus);
  const onRefresh = () => {
    dispatch(fetchAllArticles());
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={articleStatus === 'loading'}
          onRefresh={onRefresh}
        />
      }>
      <Image
        source={{uri: `${domain}/images/user-background.jpg`}}
        style={styles.userBackground}
      />
      <NewArticle />
      <ArticleList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'sans-serif',
    fontStyle: 'italic',
    width: '100%',
    padding: 10,
  },
  userBackground: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
});

export default Wall;
