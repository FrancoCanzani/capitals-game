export default function Sidebar() {
  return (
    <div className='drawer z-20 w-0 sm:hidden'>
      <input id='my-drawer' type='checkbox' className='drawer-toggle m-0 p-0' />
      <div className='drawer-content m-0 p-0'>
        <label htmlFor='my-drawer' className='btn btn-primary drawer-button'>
          Open drawer
        </label>
      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer' className='drawer-overlay'></label>
        <ul className='menu p-4 w-80 min-h-full bg-base-200 text-base-content'>
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
