import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Share, discover, and create
      <br className='max-md:hidden' />
      <span className='green_gradient text-center'>Unlock the potential of AI creativity!</span>
    </h1>
    <p className='desc text-center'>
    Prompt Hub is a vibrant community for AI enthusiasts like you! Share your amazing prompts, discover new ones, and collaborate to push the boundaries of AI creativity.
    </p>

    <Feed />
  </section>
);

export default Home;
