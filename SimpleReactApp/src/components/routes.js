import SearchPage from './searchPage'
import DescriptionPage from './descriptionPage'
import Root from './root'

const NotFound = () => <p>404 Not found</p>;

export default [
    {
        ...SearchPage,
        path:'/',
        exact:true,
        routes:[
            {
                ...SearchPage,
                path: '/search',
            },
            {
                ...DescriptionPage,
                path: '/film/:id',
            },
            {
                ...NotFound
            }
        ]
    }
]