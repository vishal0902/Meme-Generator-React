const Meme = (props) => {
  return (
    <div className="memeComponent">
      {props.url && <img src={props.url} alt="" className="memeImage" />}
      <p className="memeText top">{props.topText}</p>
      <p className="memeText bottom">{props.bottomText}</p>
    </div>
  );
};

export default Meme;
