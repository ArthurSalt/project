import React, { useEffect, useState } from 'react';
import Counter from '../components/Counter';
import ClassCounter from '../components/ClassCounter';
import InputControlled from '../components/InputControlled';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyButton from '../components/UI/button/MyButton';
import MyModal from '../components/UI/MyModal/MyModal';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/pages';
import Pagination from '../components/UI/pagination.jsx/pagination';


function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);



  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  })

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  useEffect(() => {
    fetchPosts()
  }, [page])

  const changePage = (page) => {
    setPage(page);
  }

  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <InputControlled />
      <MyButton onClick={fetchPosts}>Get Posts</MyButton>
      <MyButton onClick={() => setModal(true)}>Создать пользователя</MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: '20px' }} />

      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {postError && <h1 style={{ textAlign: 'center' }}>Произошла ошибка</h1>}
      {isPostsLoading
        ? <Loader />
        : <PostList posts={sortedAndSearchedPosts} remove={removePost} title='Список постов 1' />
      }
      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages} 
        />
    </div>
  );
}

export default Posts;