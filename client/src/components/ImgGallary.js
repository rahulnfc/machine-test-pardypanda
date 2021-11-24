import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const ImgGallary = ({ posts, loading, paginate }) => {
    const [page, setPage] = useState(1);

    if (loading) {
        return <h2 className="text-center">Loading...</h2>;
    }

    return (
        //image gallary with infinite scroll
        <div className="container">
            <div className="row">
                <InfiniteScroll
                    dataLength={posts.length}
                    next={() => {
                        setPage(page + 1);
                        paginate(page + 1);
                    }}
                    hasMore={true}
                    loader={<h4 className="text-center">Loading...</h4>}
                    endMessage={<h4 className="text-center">Yay! You have seen it all</h4>}
                >
                    {posts.map(post => (
                        <div className="col-md-12" key={post.id}>
                            <div className="card mb-4 shadow-sm">
                                <img
                                    className="card-img-top"
                                    src={post.download_url}
                                    alt={post.author}
                                />
                                <div className="card-body">
                                    <p className="card-text text-center">Posted by <span style={{ color: 'teal' }}>{post.author}</span></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </InfiniteScroll>
            </div>
        </div>
    );
};

export default ImgGallary
