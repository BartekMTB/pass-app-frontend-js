import css from './passesPage.module.css';
import { Helmet } from 'react-helmet';
import { useGetPassQuery } from '../features/passes/passesApiSlice'

const PassOne = () => {
  const passId  = "658dc13c49e85b048cb209d7"
  
  const {
    data: pass,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPassQuery(passId)

  let content

  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    content = JSON.stringify(pass.contactfound)
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }

  return (
    <section className="posts-list">
      <h2>Pass</h2>
      {content}
    </section>
  )
}

const PassesHome = () => {
  return (
    <div className={css.container}>
    <Helmet>
      <title>Passes test page</title>
    </Helmet>

      <h1 className={css.title}>
      Passes test page
      </h1>
      <div>
   <PassOne/>
      </div>
    </div>
  );
};

export default PassesHome
