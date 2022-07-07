import './App.css';

function Feed() {
    return (
           <Virtuoso
            style={{ height: "400px", }}
            totalCount={200}
            itemContent={(index) => <div>Item {index}</div>}
        />

    );
}

export default Feed;