"use client";

import styles from "./Header.module.scss";
import { useCart } from "@/providers/CartProvider";
import Link from "next/link";

function Header() {
  const classes = {
    header: styles.header,
    headerContent: styles["header__content"],
    title: styles["header__title"],
  };
  let tableId = null
  if (window) {
   tableId = window?.location.href.split('/')[4];
  }




  return (
    <main className={classes.header}>
      <div className={classes.headerContent}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h1 className={classes.title}>Kermesse de la fête de l'Aid</h1>
        { !tableId ?
            <div>
            </div> :
            <div>
                <div>
                    <Link href="/tables/[tableId]/panier" as={`/tables/${tableId}/panier`}>
                        <div className="w-auto relative">
                          <div className="absloute rounded-full bg-green-600 justify-center items-center shadow-sm text-white text-center">
                            <div className="-mt-3">
                              <span className="text-xs">{cart?.length}</span>
                            </div>
                          </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                            </svg>
                        </div>

                    </Link>
                </div>
            </div>
        }
      </div>
    </main>
  );
};

export default Header;
