import Link from 'next/link';

export default function Erro404() {
  return (
    <div>
      <main>
        <h1>
          Bem vindo ao{' '}
          <strong>
            <a href={process.env.HOST}>{process.env.NAME}</a>
          </strong>
        </h1>

        <p>Erro 404.</p>
        <p>
          <Link href="/">
            <a>Home</a>
          </Link>
        </p>
      </main>
    </div>
  );
}
