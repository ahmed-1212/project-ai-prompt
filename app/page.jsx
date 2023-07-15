import Feed from '@components/Feed'

const home = () => {
  return ( 
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powerd Prompts</span>
      </h1>
      <p className="desc text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
      </p>
      
      <Feed />
    </section>
   );
}
 
export default home;