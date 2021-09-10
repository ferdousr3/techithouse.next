import { useRouter } from 'next/router';

function ActiveLink({ title, href }) {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === href ? 'rgba(10,192,171,1)' : '#000000',
    fontWeight: 600,
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {title}
    </a>
  );
}

export default ActiveLink;