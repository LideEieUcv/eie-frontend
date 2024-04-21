import ListNavigation from '../components/list-nav';
import SearchBar from '../components/search-bar';
import Select from '../components/select';

export default function Page() {
  return (
    <div className="grid-cols-1/5  mx-40 mt-12 grid">
      {/* Componente de navegacion lateral */}
      <ListNavigation />
      <main className="px-2 pl-4">
        <h3 className="mb-4 text-4xl font-bold">Profesores</h3>
        {/* <div className="w-full border border-slate-600">Barra busqueda</div> */}
        <SearchBar />
        <div className="flex w-full items-center justify-between py-4">
          <p>58 profesores</p>
          <div className="flex items-center justify-between gap-4">
            <p>Organizar</p> <Select className="w-40" hasInitialValue />
          </div>
        </div>
        <section className="grid grid-flow-row grid-cols-5 gap-4">
          <article className="">
            <div className="h-[180px] w-full bg-slate-300"></div>
            <h5>Jhon doe</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Diam vitae tellus est pellentesque. Sed
              suspendisse aenean suscipit vulputate. Aliquam diam at amet velit posuere eget. Non
              purus elit eleifend lectus mauris enim non.
            </p>
          </article>

          <article className="">
            <div className="h-[180px] w-full bg-slate-300"></div>
            <h5>Jhon doe</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Diam vitae tellus est pellentesque. Sed
              suspendisse aenean suscipit vulputate. Aliquam diam at amet velit posuere eget. Non
              purus elit eleifend lectus mauris enim non.
            </p>
          </article>

          <article className="">
            <div className="h-[180px] w-full bg-slate-300"></div>
            <h5>Jhon doe</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Diam vitae tellus est pellentesque. Sed
              suspendisse aenean suscipit vulputate. Aliquam diam at amet velit posuere eget. Non
              purus elit eleifend lectus mauris enim non.
            </p>
          </article>
          <article className="">
            <div className="h-[180px] w-full bg-slate-300"></div>
            <h5>Jhon doe</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Diam vitae tellus est pellentesque. Sed
              suspendisse aenean suscipit vulputate. Aliquam diam at amet velit posuere eget. Non
              purus elit eleifend lectus mauris enim non.
            </p>
          </article>
          <article className="">
            <div className="h-[180px] w-full bg-slate-300"></div>
            <h5>Jhon doe</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Diam vitae tellus est pellentesque. Sed
              suspendisse aenean suscipit vulputate. Aliquam diam at amet velit posuere eget. Non
              purus elit eleifend lectus mauris enim non.
            </p>
          </article>
          <article className="">
            <div className="h-[180px] w-full bg-slate-300"></div>
            <h5>Jhon doe</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Diam vitae tellus est pellentesque. Sed
              suspendisse aenean suscipit vulputate. Aliquam diam at amet velit posuere eget. Non
              purus elit eleifend lectus mauris enim non.
            </p>
          </article>
          <article className="">
            <div className="h-[180px] w-full bg-slate-300"></div>
            <h5>Jhon doe</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Diam vitae tellus est pellentesque. Sed
              suspendisse aenean suscipit vulputate. Aliquam diam at amet velit posuere eget. Non
              purus elit eleifend lectus mauris enim non.
            </p>
          </article>
          <article className="">
            <div className="h-[180px] w-full bg-slate-300"></div>
            <h5>Jhon doe</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Diam vitae tellus est pellentesque. Sed
              suspendisse aenean suscipit vulputate. Aliquam diam at amet velit posuere eget. Non
              purus elit eleifend lectus mauris enim non.
            </p>
          </article>
          <article className="">
            <div className="h-[180px] w-full bg-slate-300"></div>
            <h5>Jhon doe</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Diam vitae tellus est pellentesque. Sed
              suspendisse aenean suscipit vulputate. Aliquam diam at amet velit posuere eget. Non
              purus elit eleifend lectus mauris enim non.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}
