
function User(props) {
    console.log(props.name)
  return (
    <div>
      User<br></br>{props.initials}{props.name}
    </div>
  );
}

export default User