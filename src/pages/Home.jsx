import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Grid from '@mui/material/Grid'
import { useDispatch, useSelector } from 'react-redux'

import { Post } from '../components/Post'
import { TagsBlock } from '../components/TagsBlock'
import { CommentsBlock } from '../components/CommentsBlock'

import { postsSelector } from '../redux/slices/posts/selectors'
import { fetchPosts, fetchTags } from '../redux/slices/posts/asyncActions'

export const Home = () => {
  const { posts, tags } = useSelector(postsSelector)
  const dispatch = useDispatch()

  const postsIsLoading = posts.status === 'loading'
  const tagsIsLoading = tags.status === 'loading'

  React.useEffect(() => {
    dispatch(fetchPosts())
    dispatch(fetchTags())
  }, [])

  return (
    <>
      <Tabs style={{ marginBottom: 15 }} value={0} aria-label='basic tabs example'>
        <Tab label='Новые' />
        <Tab label='Популярные' />
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {(postsIsLoading ? [...Array(5)] : posts.items).map((item, index) =>
            !item ? (
              <Post key={index} isLoading={true} />
            ) : (
              <Post
                key={item._id}
                id={item._id}
                title={item.title}
                imageUrl={item.imageUrl}
                user={item.user}
                createdAt={'12 июня 2022 г.'}
                viewsCount={item.viewsCount}
                commentsCount={3}
                tags={item.tags}
                isEditable
              />
            ),
          )}
        </Grid>
        <Grid xs={4} item>
          <TagsBlock items={tags.items} isLoading={tagsIsLoading} />
          <CommentsBlock
            items={[
              {
                user: {
                  fullName: 'Вася Пупкин',
                  avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',
                },
                text: 'Это тестовый комментарий',
              },
              {
                user: {
                  fullName: 'Иван Иванов',
                  avatarUrl: 'https://mui.com/static/images/avatar/2.jpg',
                },
                text: 'When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top',
              },
            ]}
            isLoading={false}
          />
        </Grid>
      </Grid>
    </>
  )
}
