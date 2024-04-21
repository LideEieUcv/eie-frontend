'use client';
import { HTMLAttributes, SyntheticEvent, useEffect, useMemo, useRef, useState } from 'react';

const DEFAULT_OPTIONS = ['A - Z', 'Z - A'];

interface SelectProps extends HTMLAttributes<HTMLInputElement> {
  options?: string[];
  multiple?: boolean;
  placeholder?: string;
  hasInitialValue?: boolean;
}

const Select = ({
  options = DEFAULT_OPTIONS,
  multiple = false,
  className = '',
  placeholder = 'Default...',
  hasInitialValue = false,
  ...props
}: SelectProps) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [listWidth, setListWidth] = useState<number | undefined>(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    hasInitialValue ? [options[0]] : [],
  );

  useEffect(() => {
    const inputRef = document.getElementById('input');
    setListWidth(inputRef?.offsetWidth);
  }, []);

  useEffect(() => {
    if (!selectRef.current) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (!selectRef.current) return;
      if (!selectRef.current.contains(event.target as Node)) {
        handleCloseSelect();
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [selectRef.current]);

  const handleOpenSelect = (event: React.SyntheticEvent) => {
    console.log('fudjskfjdsalkfjasdkl');
    event.preventDefault();
    event.stopPropagation();
    const listRef = document.getElementById('select-list');
    const iconRef = document.getElementById('select-icon');
    if (!listRef || !iconRef) return;
    if (listRef.className?.includes('hidden')) {
      listRef.className = listRef.className.replace('hidden', 'flex');
      iconRef.className = iconRef.className + ' rotate-180';
      return;
    }
    handleCloseSelect();
  };

  const handleCloseSelect = () => {
    const listRef = document.getElementById('select-list');
    const iconRef = document.getElementById('select-icon');
    if (!listRef || !iconRef) return;
    listRef.className = listRef.className.replace('flex ', 'hidden ');
    iconRef.className = iconRef.className.replace(' rotate-180', '');
  };

  const handleOptionClick = (option: string) => (event: SyntheticEvent) => {
    event.preventDefault();
    // event.stopPropagation();
    if (multiple) {
      if (selectedOptions.includes(option)) {
        setSelectedOptions((options) => options.filter((opt) => opt !== option));
        return;
      }
      setSelectedOptions((options) => [...options, option]);
      return;
    }
    setSelectedOptions([option]);
    handleCloseSelect();
  };

  const valueString = useMemo(
    () => (selectedOptions.length ? selectedOptions.join(', ') : ''),
    [selectedOptions],
  );

  return (
    <div
      id="input"
      className={`relative flex w-full items-center border border-black bg-white py-1 pl-2 pr-1 transition-all ${className}`}
      ref={selectRef}
      onClick={handleOpenSelect}
    >
      <input
        {...props}
        placeholder={placeholder}
        value={valueString}
        className="w-full flex-1 cursor-pointer border border-none bg-transparent text-gray-900 focus-visible:outline-none"
        // disabled
      />
      <button id="select-icon" className="transition-transform" onClick={handleOpenSelect}>
        <SelectIcon className="cursor-pointer p-1 text-gray-500 hover:bg-slate-200" />
      </button>
      <div
        className="absolute -left-[1px] bottom-0 z-50 hidden translate-y-full flex-col border border-black bg-white"
        style={{ width: `${listWidth}px` }}
        id="select-list"
        onBlur={handleCloseSelect}
      >
        {options.map((option, index) => (
          <>
            {index !== 0 && <hr className="border-b border-b-slate-300" />}
            <span
              className="flex cursor-pointer justify-between px-2 py-1 hover:bg-slate-100"
              onClick={handleOptionClick(option)}
            >
              {option}
              {selectedOptions.includes(option) && <CheckedIcon />}
            </span>
          </>
        ))}
      </div>
    </div>
  );
};

export default Select;

function SelectIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.0306 9.53063L12.5306 17.0306C12.4609 17.1004 12.3782 17.1557 12.2871 17.1934C12.1961 17.2312 12.0985 17.2506 11.9999 17.2506C11.9014 17.2506 11.8038 17.2312 11.7127 17.1934C11.6217 17.1557 11.539 17.1004 11.4693 17.0306L3.9693 9.53063C3.82857 9.3899 3.74951 9.19902 3.74951 9C3.74951 8.80098 3.82857 8.61011 3.9693 8.46938C4.11003 8.32865 4.30091 8.24958 4.49993 8.24958C4.69895 8.24958 4.88982 8.32865 5.03055 8.46938L11.9999 15.4397L18.9693 8.46938C19.039 8.39969 19.1217 8.34442 19.2128 8.30671C19.3038 8.26899 19.4014 8.24958 19.4999 8.24958C19.5985 8.24958 19.6961 8.26899 19.7871 8.30671C19.8781 8.34442 19.9609 8.39969 20.0306 8.46938C20.1002 8.53906 20.1555 8.62178 20.1932 8.71283C20.2309 8.80387 20.2503 8.90146 20.2503 9C20.2503 9.09855 20.2309 9.19613 20.1932 9.28717C20.1555 9.37822 20.1002 9.46094 20.0306 9.53063Z"
        fill="black"
      />
    </svg>
  );
}

function CheckedIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12.6111L8.92308 17.5L20 6.5"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
