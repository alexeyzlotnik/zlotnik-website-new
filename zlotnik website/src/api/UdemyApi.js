const UdemyApi = {
  getUdemyCourses: () => {
    var myHeaders = new Headers()
    myHeaders.append('Authorization', 'Bearer 6FpuanGPOm56jgrY5VFuaxxTg7lQyBik')
    myHeaders.append('Origin', window.location.origin)

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    }

    return fetch(
      'https://www.udemy.com/instructor-api/v1/taught-courses/courses/?fields[course]=@all,num_reviews,-published_title&fields[user]=title',
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => result)
      .catch((error) => {
        console.log('error', error)
        throw error
      })
  },
  getCoursesReviews: () => {
    var myHeaders = new Headers()
    myHeaders.append('Authorization', 'Bearer 6FpuanGPOm56jgrY5VFuaxxTg7lQyBik')
    myHeaders.append('Origin', window.location.origin)

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    }

    return fetch(
      'https://www.udemy.com/instructor-api/v1/taught-courses/reviews/?page_size=40',
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => result)
      .catch((error) => {
        console.log('error', error)
        throw error
      })
  }
}

export default UdemyApi
