import logo from './logo.svg';
import logo2 from './1.png';
import './App.css';
import 'flowbite';
// #6EA833
function App() {
  return (
    <>
    
    <div className="-mt-48">
      
        <img src={logo} className alt=""/>  


    </div>
    
<footer class="p-4  rounded-lg shadow-lg md:px-6 md:py-8 absolute w-full left-0 bottom-0 dark:bg-gray-900 shadow-2xl">
    <div class="sm:flex sm:items-center sm:justify-center">

        <ul class="flex flex-wrap items-center mb-6 ">
    
            
            <li>
                <a href="mailto: Hassna@master-food.social" class="mr-4 hover:underline md:mr-6 ">Hassna@master-food.social</a>
            </li>
            <li>
                <a href="mailto: Othmane@master-food.social" class="mr-4 hover:underline md:mr-6">Othmane@master-food.social</a>
            </li>        
        </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span class="block text-sm text-gray-500 text-center dark:text-gray-400">© V 1.0.1 <a href="" class="hover:underline">MasterFOOD™</a>. All Rights Reserved.
    </span>
</footer>

    </>
  );
}

export default App;
