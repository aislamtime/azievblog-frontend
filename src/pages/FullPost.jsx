import React from 'react'

import { Post } from '../components/Post'
import { Index } from '../components/AddComment'
import { CommentsBlock } from '../components/CommentsBlock'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postsSelector } from '../redux/slices/posts/selectors'
import { postsAPI } from '../api/posts'
import { fetchOnePost } from '../redux/slices/posts/asyncActions'

export const FullPost = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { fullPost } = useSelector(postsSelector)
  //const [post, setPost] = React.useState({})
  //const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    dispatch(fetchOnePost(id))

    //postsAPI
    //  .getOnePost(id)
    //  .then((data) => {
    //    setPost(data)
    //    setIsLoading(false)
    //    console.log('Все прошло успешно', post, isLoading)
    //  })
    //  .catch((err) => {
    //    console.warn(err)
    //    alert('Возникла ошибка при получении поста..')
    //  })
  }, [])

  console.log(fullPost)

  return (
    <>
      {fullPost.status === 'loading' ? (
        <Post isLoading={fullPost.status === 'loading'} />
      ) : (
        <>
          <Post
            id={fullPost._id}
            title={fullPost.title}
            imageUrl={fullPost.imageUrl}
            //imageUrl='https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png'
            user={fullPost.user}
            createdAt={'12 июня 2022 г.'}
            viewsCount={fullPost.viewsCount}
            commentsCount={3}
            tags={fullPost.tags}
            isFullPost>
            <p>{fullPost.text}</p>
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
