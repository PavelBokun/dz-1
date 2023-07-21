export const Raiting = () => {
  return (
    <div>
      <Stars1 selected={true} text="hi"/>
      <Stars1 selected={true} text="hi"/>
      <Stars1 selected={true} text="hi"/>
      <Stars1 selected={true} text="hi"/>
    </div>
  );
};

 const Stars1 = (props: any) => {
  // const color="red"

  if (props.selected===true) {
    return(

    <div>
<div>star</div>
<div>{props.text}</div>
    </div>
    )
    
  }else {
    return <div></div>;
  }
};
