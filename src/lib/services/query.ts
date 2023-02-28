// import {request, gql} from 'graphql-request'

// export async function getPosts(){
//     const query = gql`
//     query myQuery {
//         posts {
//           id
//           slug
//           stage
//           excerpt
//           author {
//             name
//             id
//             publishedAt
//           }

//           createdAt
//           featuredImage {
//             url
//           }
//           title
//         }
//       }
//     `

//     const result = await request(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!, query)
//     return result.posts
// }    

//   content {
//     json
//   }