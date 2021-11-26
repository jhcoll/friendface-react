function ButtonAction({
  buttonTitle,
  id,
  buttonFunction,
  setPostDelete,
  setLikeCount,
  likeCount,
  setShowDeleteAlert,
}) {
  return (
    <button
      onClick={() =>
        buttonFunction(
          id,
          setLikeCount,
          likeCount,
          setPostDelete,
          setShowDeleteAlert
        )
      }
    >
      {buttonTitle}
    </button>
  );
}

export default ButtonAction;
