import React from 'react';
import Department from '../components/Department';

const Departments = () => {
    return (
        <div className='px-5 mt-8 mb-8'>
            <div>
                <h1 className='text-2xl font-semibold'>Departments</h1>
            </div>
            <div className='flex space-y-2 lg:space-y-0 flex-col lg:flex-row justify-between mt-5'>
                <input className='h-10 w-60 outline-none px-3 rounded-md border-1' type="text" placeholder='Search by ID...'/>
                <input className='h-10 w-60 outline-none px-3 rounded-md border-1'type="text" placeholder='Search by Name...'/>
                <input className='h-10 w-60 outline-none px-3 rounded-md border-1'type="text" placeholder='Search by Phone...'/>
                <input className='h-10 w-60 outline-none rounded-md border-1 bg-indigo-700 text-white cursor-pointer'type="submit" value='Search'  />
            </div>
            <div className='mt-5 bg-white px-3 py-5 rounded-md'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-xl text-semibold'>All Departments</h3>
                    <button className='py-2 rounded-md bg-indigo-700 text-white px-5'>Add Department</button>
                </div>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
    <table class="w-full text-sm text-left">
        <thead class="text-xs text-gray-100 uppercase bg-indigo-700">
            <tr>
                <th scope="col" class="px-6 py-3">
                    <input className='h-4 w-4' type="checkbox" />
                </th>
                <th scope="col" class="px-6 py-3">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    HOD
                </th>
                <th scope="col" class="px-6 py-3">
                    Started Year
                </th>
                <th scope="col" class="px-6 py-3">
                    No of Student
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <Department/>
           
        </tbody>
    </table>
</div>


                <div className='mt-5 flex justify-between'>
                    <p>Showing 1 to 10 of 11 entries</p>
                    <div>
                    {[...Array(3)].map((value, index) => <button className='border-2 border-indigo-700 px-2 mr-1'>{index + 1}</button>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Departments;