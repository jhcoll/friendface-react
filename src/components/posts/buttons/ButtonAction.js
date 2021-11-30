function ButtonAction({
  buttonTitle,
  buttonFunction,
  params
}) {
  return (
    <button
      onClick={() =>
        buttonFunction(
          params
        )
      }
    >
      {buttonTitle}
    </button>
  );
}

export default ButtonAction;
