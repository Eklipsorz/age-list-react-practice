const UserInfoListItem = (props) => {
  const clickHandler = (event) => {
    props.onDeleteItem(props.id);
  };

  return (
    <li onClick={clickHandler} id={props.id}>
      {props.children}
    </li>
  );
};

export default UserInfoListItem;
