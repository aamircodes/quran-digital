export default function Navbar() {
  return (
    <div className='navbar bg-base-200'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl'>APP</a>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a>Github</a>
          </li>
          <li>
            <a>Twitter</a>
          </li>
          <li>
            <details>
              <summary>Theme</summary>
              <ul className='p-2 bg-base-100'>
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
