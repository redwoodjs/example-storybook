// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route, Set } from '@redwoodjs/router'
import PostsLayout from 'src/layouts/PostsLayout'
import BlogLayout from 'src/layouts/BlogLayout'

const Routes = () => {
  return (
    <Router>
      {process.env.NODE_ENV !== 'production' && (
        <>
          <Route path="/login" page={LoginPage} name="login" />
          <Route path="/signup" page={SignupPage} name="signup" />
          <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
          <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        </>
      )}
      <Private unauthenticated="home" roles="admin">
        <Set wrap={PostsLayout}>
          <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
          <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
          <Route path="/admin/posts/{id:Int}" page={PostPostPage} name="post" />
          <Route path="/admin/posts" page={PostPostsPage} name="posts" />
          <Route path="/admin" page={PostPostsPage} name="posts" />
        </Set>
      </Private>

      <Set wrap={BlogLayout}>
        {/* since this is mostly a demo of storybook, the login flow is not needed and actually wiring it up was causing Google to flag the app as a phishing site: https://developers.google.com/search/docs/advanced/security/social-engineering
        TODO come up with a better landing page */}
        {process.env.NODE_ENV === 'production' ? (
          <>
            <Route path="/login" page={AboutPage} name="login" />
            <Route path="/signup" page={AboutPage} name="signup" />
            <Route path="/forgot-password" page={AboutPage} name="forgotPassword" />
            <Route path="/reset-password" page={AboutPage} name="resetPassword" />
            <Route path="/article/{id:Int}" page={AboutPage} name="article" />
            <Route path="/contact" page={AboutPage} name="contact" />
            <Route path="/about" page={AboutPage} name="about" />
            <Route path="/" page={AboutPage} name="home" />
          </>
        ) : (
          <>
            <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
            <Route path="/contact" page={ContactPage} name="contact" />
            <Route path="/about" page={AboutPage} name="about" />
            <Route path="/" page={HomePage} name="home" />
          </>
        )}
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
