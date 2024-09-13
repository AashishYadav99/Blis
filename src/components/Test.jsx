function Test() {
  function Submit(e) {
    const formEle = document.querySelector("form");
    e.preventDefault();
    console.log("Submitted");
    const formData = new FormData(formEle);
    fetch("https://script.google.com/macros/s/AKfycbwWpSryADRFpRC6Q7wkYPMFfJw2BlAc8La937foVBdn/dev",
      {
        method: "POST",
        headers: formData
      }
    );
  }
  return (
    <>
      <h1>Test for sheet</h1>

      <form class="" onSubmit={(e) => Submit(e)}>
        Name:
        <input type="text" name="Name" />
        Email:
        <input type="email" name="Email" />
        Message:
        <input type="text" name="Message" />
        <button>Submit</button>
      </form>
    </>
  );
}

export default Test;
