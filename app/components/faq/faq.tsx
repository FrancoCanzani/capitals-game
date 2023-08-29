import FAQuestion from './faQuestion';

export default function Faq() {
  return (
    <section className='antialiased transition-all duration-500 max-w-2xl flex flex-col mx-4 py-4 mt-8 lg:mx-auto items-start'>
      <h2 className='text-xl font-semibold w-full border-b'>F.A.Q</h2>
      <FAQuestion
        question='What’s the goal of the game?'
        answer='The goal is to chain as many correct capitals as possible.'
      />
      <FAQuestion
        question='How many countries are there?'
        answer='There are close to 250 countries, from South Africa to Tajikistan and more.'
      />
      <FAQuestion
        question='Some capitals seem to be wrong.'
        answer='Every capital has to be written as its official name. For example, the capital of Cameroon is Yaoundé. This also includes capitals with comma separation (Washington, D.C.) or spaces (Vatican City).'
      />
      <FAQuestion
        question='Can I install Capitals on my phone?'
        answer='There is no application on the App Store or on Google Play. If you find one, it’s probably a copycat, and we recommend avoiding it. If you want to install the webpage on your phone, you can find an option in your browser called “Add to home screen.”'
      />
      <FAQuestion
        question='Why is your data incorrect or old?'
        answer='We are continually working to update our data as quickly and accurately as possible. We understand that borders change, capital cities move, and maps become outdated.'
      />
      <FAQuestion
        question='How can I support the game?'
        answer={
          <p>
            We have a{' '}
            <a
              href='https://www.buymeacoffee.com/francocanzani'
              target='_blank'
              className='underline font-semibold text-yellow-400'
            >
              BuyMeACoffee
            </a>{' '}
            page.
          </p>
        }
      />
    </section>
  );
}
