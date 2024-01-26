// Componentes / JSX = JavaScript + XML

// Possibilidade 2
// import Post from './Post';

// Possibilidade 1
import { Post } from './components/Post';
import { Header } from './components/Header';
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/costadaniele.png',
      name: 'Daniele Costa',
      role: 'Front-End Developer'
    },
    content: [
      { type: 'paragraph', content: '👋' },
      { type: 'link', content: 'https://www.capsulassonoras.com' },
      { type: 'paragraph', content: '👉 Cápsulas Sonoras, projeto realizado com o SONatório' },
      { type: 'paragraph', content: '#novoprojeto #nlw #rocketseat' }
    ],
    publishedAt: new Date('2024-01-24 17:08')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/costadaniele.png',
      name: 'Maria Pereira',
      role: 'Artista Visual'
    },
    content: [
      { type: 'paragraph', content: '👋' },
      { type: 'link', content: 'https://www.capsulassonoras.com' },
      { type: 'paragraph', content: '👉' },
      { type: 'paragraph', content: '#UFRB #nlw #rocketseat' }
    ],
    publishedAt: new Date('2024-01-24 17:10')
  }
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
