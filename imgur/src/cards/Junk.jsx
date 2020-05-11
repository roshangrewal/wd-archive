function Cards(props) {
  return (
    <div className="container custom-container">
      <div className="row">
        <div className="col-md-3">
          <Card imgsrc={props.img} title={props.title} />
          {/* <Card imgsrc={img2} title="dsadjksa" />
            <Card imgsrc={img3} title="dsadjksa" />
            <Card imgsrc={img16} title="dsadjksa" /> */}
        </div>
        <div className="col-md-3">
          {/* <Card imgsrc={img5} title="dsadjksa" />
            <Card imgsrc={img6} title="dfsfds" />
            <Card imgsrc={img7} title="dfsfds" />
            <Card imgsrc={img8} title="dsadjksa" /> */}
        </div>
        <div className="col-md-3">
          {/* <Card imgsrc={img9} title="dsadjksa" />
            <Card imgsrc={img10} title="dfsfds" />
            <Card imgsrc={img11} title="dfsfds" />
            <Card imgsrc={img12} title="dsadjksa" /> */}
        </div>
        <div className="col-md-3">
          {/* <Card imgsrc={img13} title="dsadjksa" />
            <Card imgsrc={img14} title="dfsfds" />
            <Card imgsrc={img15} title="dfsfds" />
            <Card imgsrc={img4} title="dsadjksa" /> */}
        </div>
      </div>
    </div>
  );
}
