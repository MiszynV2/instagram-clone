import { Virtuoso } from 'react-virtuoso'
import ImageContainer from "../../components/ImageContainer/ImageContainer";
import { useCallback, useState, useEffect } from 'react'
import data from './../../data/data.json'
const Footer = () => {
    return (
        <div
            style={{
                padding: '2rem',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            Loading...
        </div>
    )
}

function Feed() {

    const [totalCount, setCount] = useState(10)

    const loadMore = useCallback(() => {
        return setTimeout(() => {
            setCount((total) => total + 100)
        }, 200)
    }, [setCount])

    useEffect(() => {
        const timeout = loadMore()
        return () => clearTimeout(timeout)
    }, [])

    return (
           <Virtuoso
            style={{ height: "calc(100vh - 89px)", }}
            totalCount={totalCount}
            endReached={loadMore}
            data={data}
            itemContent={(index, data) => <ImageContainer index={index} imageData={data} />}
            components={{ Footer }}
        />

    );
}

export default Feed;