import React from 'react'

import { Post } from '../components/Post'
import { Index } from '../components/AddComment'
import { CommentsBlock } from '../components/CommentsBlock'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { postsSelector } from '../redux/slices/posts/selectors'
import { postsAPI } from '../api/posts'

export const FullPost = () => {
  const { id } = useParams()
  const [post, setPost] = React.useState({})
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    postsAPI
      .getOnePost(id)
      .then((data) => {
        setPost(data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.warn(err)
        alert('Возникла ошибка при получении поста..')
      })
  }, [])

  return (
    <>
      {isLoading ? (
        <Post isLoading={isLoading} />
      ) : (
        <>
          <Post
            id={post._id}
            title={post.title}
            imageUrl={post.imageUrl}
            //imageUrl='https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png'
            user={post.user}
            createdAt={'12 июня 2022 г.'}
            viewsCount={post.viewsCount}
            commentsCount={3}
            tags={post.tags}
            isFullPost>
            <p>{post.text}</p>
          </Post>
          <CommentsBlock
            items={[
              {
                user: {
                  fullName: 'Вася Пупкин',
                  avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',
                },
                text: 'Это тестовый комментарий 555555',
              },
              {
                user: {
                  fullName: 'Иван Иванов',
                  avatarUrl: 'https://mui.com/static/images/avatar/2.jpg',
                },
                text: 'When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top',
              },
            ]}
            isLoading={false}>
            <Index />
          </CommentsBlock>
        </>
      )}
    </>
  )
}
