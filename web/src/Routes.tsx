// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Set, Route } from '@redwoodjs/router'

import AdminLayout from 'src/layouts/AdminLayout'

import { useAuth } from './auth'
import FrontLayout from './layouts/FrontLayout/FrontLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Private unauthenticated="home">
        <Set wrap={AdminLayout} title="Admin" titleTo="posts" buttonLabel="New Post" buttonTo="newPost">
          <Route path="/admin/posts/new" page={AdminPostNewPostPage} name="newPost" />
          <Route path="/admin/posts/{id:Int}/edit" page={AdminPostEditPostPage} name="editPost" />
          <Route path="/admin/posts/{id:Int}" page={AdminPostPostPage} name="post" />
          <Route path="/admin/posts" page={AdminPostPostsPage} name="posts" />
        </Set>
      </Private>
      <Set wrap={FrontLayout}>
        <Route path="/" page={FrontIndexPage} name="home" />
        <Route path="/about" page={FrontAboutPage} name="about" />
        <Route path="/contact" page={FrontContactPage} name="contact" />
        <Route path="/article/{id:Int}" page={FrontArticlePage} name="article" />
        <Route path="/login" page={AuthLoginPage} name="login" />
        <Route path="/signup" page={AuthSignupPage} name="signup" />
        <Route path="/forgot-password" page={AuthForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={AuthResetPasswordPage} name="resetPassword" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
