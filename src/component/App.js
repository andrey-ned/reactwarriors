import React from 'react';
import "../index.css";

const movie = {
    title: "Avengers Infinity War",
    vote_ratio: 8.5,
    image: "https://upload.wikimedia.org/wikipedia/ru/3/3c/The_Avengers_2012_logo.jpg",
    overview: "As the avengers and their allies have continued to protect the world from the enemies"
}
function Image(props) {
    const {src, alt} = props;
    return(
        <img src={src} alt={alt} width="100%"/>
    )
}

class MovieItem extends React.Component{

    constructor() {
        super();

        this.state = {
            show: false,
            like: false,
        }
    }

    toggleOverview = () => {
        this.setState({show: !this.state.show});
    }
    handelLike = () =>{
        this.setState({like: !this.state.like});
    }

    render(){
        const {data: {title, vote_ratio, image, overview}} = this.props;

        return(
            <div style={{width: 300}}>
                <h3>{title}</h3>
                <Image src={image} alt={title} />
                <p>Ratio : {vote_ratio}</p>
                <br/>

                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <button
                        type="button"
                        onClick={this.toggleOverview}
                    >
                        {this.state.show ? "Hide" : "Show"}
                    </button>
                    <button
                        type="button"
                        onClick={this.handelLike}
                        className={this.state.like ?  "btn--like" : ""}
                    >
                        Like
                    </button>
                </div>

                {this.state.show ? <h5>{overview}</h5> : null}

            </div>
        )
    }
}

function App() {

  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}

export default App;
