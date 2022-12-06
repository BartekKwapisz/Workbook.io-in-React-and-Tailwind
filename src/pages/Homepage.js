function Homepage() {
  return (
    <>
      <section className="text-white bg-slate-700 w-full h-nav-footer content">
            <div className="caption">
                    <h2>Workbook.io</h2>
                    <h6>Connects employment agencies with employers</h6>
            </div>
          <video autoPlay muted loop>
            <source src={require("../img/video.mp4")} type="video/mp4"></source>
          </video>
         
      </section>
    </>
  );
}

export default Homepage;
