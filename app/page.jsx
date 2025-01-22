import { submitForm } from './actions';

const services = [
  {
    title: 'Stock Portfolio Management',
    description: 'Manage your stock portfolio with precision. Maximize returns and minimize risks with our tailored strategies.',
    icon: '📈',
    bgClass: 'bg-orange-50'
  },
  {
    title: 'Tax Saving Investment Planning',
    description: 'Plan your investments wisely and save on taxes. We help you balance growth with smart tax-saving strategies.',
    icon: '💰',
    bgClass: 'bg-green-50'
  },
  {
    title: 'Insurance Investment',
    description: 'Secure your future with insurance-linked investment plans. Protect your wealth while growing it steadily.',
    icon: '🛡️',
    bgClass: 'bg-blue-50'
  },
  {
    title: 'Mutual Funds Investment',
    description: 'Diversify your investments with mutual funds. Gain access to expert-managed portfolios for steady growth.',
    icon: '📊',
    bgClass: 'bg-pink-50'
  }
];

const features = [
  {
    title: 'Comprehensive Wealth Management',
    description: 'Manage investments from 5,000 to crores with expert strategies'
  },
  {
    title: 'Guaranteed Loss Protection',
    description: 'If you lose, we will bear the loss minimizing your financial risks.'
  },
  {
    title: 'Tailored Investment Strategies',
    description: 'Customized investment plans that align with your financial goals.'
  },
  {
    title: 'Diverse Investment Options',
    description: 'Access to various investment instruments: stocks, mutual funds, and more.'
  },
  {
    title: 'Tax-Saving Investment Planning',
    description: 'Maximize returns while saving on taxes with efficient planning'
  },
  {
    title: 'Transparent Fees and Reporting',
    description: 'No hidden fees; regular updates to keep you informed about your investments'
  }
];

const WealthManagementLanding = () => (
  <div className='min-h-screen bg-white'>
    <header className='container mx-auto px-6 py-6'>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-bold'>Logo</div>
        <button className='bg-black text-white px-4 py-2 rounded-full text-sm'>Contact us</button>
      </div>
    </header>

    <section className='container mx-auto px-6 py-12'>
      <div className='grid md:grid-cols-2 gap-12 items-center'>
        <div>
          <h1 className='text-4xl md:text-5xl font-bold mb-4 leading-tight'>Wealth Management for Everyone</h1>
          <p className='text-gray-600 mb-8'>Secure Your Future With Tailored Investment Strategies, No Matter Where You Start (5K to Crores).</p>
          <button className='bg-black text-white px-6 py-3 rounded-full'>Get Started Today</button>
        </div>
        {/* <div className='flex gap-4'>
          <div className=''>
            <img src='/api/placeholder/400/300' height={202} width={154} alt='Happy clients' className='object-cover rounded-2xl' />
          </div>
          <div>
            <div>
              <img src='/api/placeholder/200/150' height={105} width={119} alt='Client review' className='object-cover rounded-2xl' />
            </div>
            <div>
              <img src='/api/placeholder/200/150' height={134} width={119} alt='Client success' className='object-cover rounded-2xl' />
            </div>
          </div>
        </div> */}
      </div>
    </section>

    <section className='container mx-auto px-6 py-16 text-center'>
      <h2 className='text-3xl md:text-4xl max-w-4xl mx-auto'>
        <span className='text-gray-400'>We take the risk,</span> <span className='font-semibold text-black'>you reap the reward.</span>{' '}
        <span className='text-gray-400'>If you lose,</span> <span className='font-semibold text-black'>we cover it.</span>
      </h2>
    </section>

    <section className='container mx-auto px-6 py-12'>
      <div className='grid md:grid-cols-4 gap-6'>
        {services.map((service, index) => (
          <div key={index} className={`p-6 rounded-2xl ${service.bgClass}`}>
            <div className='text-3xl mb-4'>{service.icon}</div>
            <h3 className='font-semibold text-lg mb-3'>{service.title}</h3>
            <p className='text-gray-600 text-sm leading-relaxed'>{service.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className='container mx-auto px-6 py-16'>
      <h2 className='text-2xl md:text-3xl text-center font-bold mb-16 max-w-3xl mx-auto'>
        Tailored investment strategies for all, whether you are starting small or managing millions.
      </h2>
      <div className='grid md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
        {features.map((feature, index) => (
          <div key={index} className='flex items-start space-x-3'>
            <div className='mt-1'>
              <div className='w-5 h-5 rounded-full bg-black flex items-center justify-center text-white text-xs'>✓</div>
            </div>
            <div>
              <h3 className='font-semibold mb-2'>{feature.title}</h3>
              <p className='text-gray-600 text-sm leading-relaxed'>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* <section className='container mx-auto px-6 py-16'>
      <div className='flex justify-center space-x-6'>
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <div key={index} className='w-12 h-12 rounded-full bg-gray-200 overflow-hidden'>
            <img src='/api/placeholder/48/48' alt='Team member' className='w-full h-full object-cover' />
          </div>
        ))}
      </div>
    </section> */}

    <section className='container mx-auto px-6 py-16'>
      <div className='max-w-2xl mx-auto'>
        <h2 className='text-2xl font-bold mb-8 flex items-center gap-2'>
          <span className='inline-block'>✉️</span> Get in touch
        </h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <p className='text-gray-500 mb-1'>Phone:</p>
            <p className='mb-4'>+91 9519565049</p>
            <p className='text-gray-500 mb-1'>Email:</p>
            <p>Support@WM.com</p>
          </div>
          <form className='space-y-4'>
            <div className='grid grid-cols-2 gap-4'>
              <input name='first_name' type='text' placeholder='First name' className='w-full p-3 rounded-lg border border-gray-200' />
              <input name='last_name' type='text' placeholder='Last name' className='w-full p-3 rounded-lg border border-gray-200' />
            </div>
            <input name='email' type='email' placeholder='Email' className='w-full p-3 rounded-lg border border-gray-200' />
            <textarea name='description' placeholder='Type your message here' className='w-full p-3 rounded-lg border border-gray-200 h-32 resize-none' />
            <button className='bg-black text-white px-6 py-3 rounded-full w-full' formAction={submitForm}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>

    <footer className='container mx-auto px-6 py-8 border-t'>
      <div className='flex justify-between items-center text-sm text-gray-600'>
        <p>All the rights are reserved by @company name</p>
        <p>Terms and conditions</p>
      </div>
    </footer>
  </div>
);

export default WealthManagementLanding;
