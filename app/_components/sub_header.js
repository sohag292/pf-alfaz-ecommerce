export default function SubHeader() {
  const config = {
    helplineNumber: "0964781656",
  };

  const buttonGroupStyles = "flex gap-8"

  return (
    <div className="bg-[#F0F1F1]">
      <div className="flex justify-between container xl:w-[76.25rem]">
        {/*  Starting Button Group */}
        <div className={buttonGroupStyles}>
          <SHButton primary>English</SHButton>
          <SHButton>Help Center</SHButton>
          <SHButton>Helpline: {config.helplineNumber}</SHButton>
        </div>
        {/*  Ending Button Group */}
        <div className={buttonGroupStyles}>
          <SHButton>Become a Seller</SHButton>
          <SHButton>Order Track</SHButton>
          <SHButton primary>Sign up / Login</SHButton>
        </div>
      </div>
    </div>
  );
}

function SHButton({children, primary, ...props}) {
  const className = `
    ${primary && 'text-primary-500'} 
    ${props.className}
  `
  return (
    <button {...props} className={'text-xs py-2' + className}>{children}</button>
  );
}