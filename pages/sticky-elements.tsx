import { createUseStyles, jss } from "react-jss";
// Option: 1
jss
  .createStyleSheet({
    "@global html, body": {
      fontFamily: '"Poppins", sans-serif',
      margin: 0,
      padding: 0,
    },
  })
  .attach();
jss
  .createStyleSheet({
    "@font-face": {
      fontFamily: "Poppins",
      src: `url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap)`,
    },
  })
  .attach();
const useClasses = createUseStyles({
  // Option: 2
  //   "@font-face": {
  //     fontFamily: "Poppins",
  //     src: `url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap)`,
  //   },
  //   "@global html, body": {
  //     margin: 0,
  //     padding: 0,
  //    fontFamily: '"Poppins", sans-serif',
  //   },
  root: {
    position: "relative",
    padding: 50,
    background: "#111",
  },
  sticky: {
    position: "sticky",
    top: 0,
    minHeight: 60,
    color: "#fff",
    fontSize: "2rem",
    display: "inline-flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "rgba(255,31,254)",
    padding: "0 20px",
    fontWeight: 600,
    boxShadow: "0 5px 25px rgba(0, 0, 0, 0.5)",
  },
  content: {
    padding: "20px 0",
    color: "#888",
  },
});
export const StickyElementsPage = () => {
  const classes = useClasses();
  return (
    <div className={classes.root}>
      <section>
        <div className={classes.sticky}>JavaScript</div>
        <div className={classes.content}>
          JavaScript (JS) is a lightweight, interpreted, or just-in-time
          compiled programming language with first-class functions. While it is
          most well-known as the scripting language for Web pages, many
          non-browser environments also use it, such as Node.js, Apache CouchDB
          and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm,
          single-threaded, dynamic language, supporting object-oriented,
          imperative, and declarative (e.g. functional programming) styles. Read
          more about JavaScript. This section is dedicated to the JavaScript
          language itself, and not the parts that are specific to Web pages or
          other host environments. For information about API specifics to Web
          pages, please see Web APIs and DOM. The standard for JavaScript is
          ECMAScript. As of 2012, all modern browsers fully support ECMAScript
          5.1. Older browsers support at least ECMAScript 3. On June 17, 2015,
          ECMA International published the sixth major version of ECMAScript,
          which is officially called ECMAScript 2015, and was initially referred
          to as ECMAScript 6 or ES6. Since then, ECMAScript standards are on
          yearly release cycles. This documentation refers to the latest draft
          version, which is currently ECMAScript 2020. Do not confuse JavaScript
          with the Java programming language. Both "Java" and "JavaScript" are
          trademarks or registered trademarks of Oracle in the U.S. and other
          countries. However, the two programming languages have a very
          different syntax, semantic, and use. JavaScript (JS) is a lightweight,
          interpreted, or just-in-time compiled programming language with
          first-class functions. While it is most well-known as the scripting
          language for Web pages, many non-browser environments also use it,
          such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a
          prototype-based, multi-paradigm, single-threaded, dynamic language,
          supporting object-oriented, imperative, and declarative (e.g.
          functional programming) styles. Read more about JavaScript. This
          section is dedicated to the JavaScript language itself, and not the
          parts that are specific to Web pages or other host environments. For
          information about API specifics to Web pages, please see Web APIs and
          DOM. The standard for JavaScript is ECMAScript. As of 2012, all modern
          browsers fully support ECMAScript 5.1. Older browsers support at least
          ECMAScript 3. On June 17, 2015, ECMA International published the sixth
          major version of ECMAScript, which is officially called ECMAScript
          2015, and was initially referred to as ECMAScript 6 or ES6. Since
          then, ECMAScript standards are on yearly release cycles. This
          documentation refers to the latest draft version, which is currently
          ECMAScript 2020. Do not confuse JavaScript with the Java programming
          language. Both "Java" and "JavaScript" are trademarks or registered
          trademarks of Oracle in the U.S. and other countries. However, the two
          programming languages have a very different syntax, semantic, and use.
          JavaScript (JS) is a lightweight, interpreted, or just-in-time
          compiled programming language with first-class functions. While it is
          most well-known as the scripting language for Web pages, many
          non-browser environments also use it, such as Node.js, Apache CouchDB
          and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm,
          single-threaded, dynamic language, supporting object-oriented,
          imperative, and declarative (e.g. functional programming) styles. Read
          more about JavaScript. This section is dedicated to the JavaScript
          language itself, and not the parts that are specific to Web pages or
          other host environments. For information about API specifics to Web
          pages, please see Web APIs and DOM. The standard for JavaScript is
          ECMAScript. As of 2012, all modern browsers fully support ECMAScript
          5.1. Older browsers support at least ECMAScript 3. On June 17, 2015,
          ECMA International published the sixth major version of ECMAScript,
          which is officially called ECMAScript 2015, and was initially referred
          to as ECMAScript 6 or ES6. Since then, ECMAScript standards are on
          yearly release cycles. This documentation refers to the latest draft
          version, which is currently ECMAScript 2020. Do not confuse JavaScript
          with the Java programming language. Both "Java" and "JavaScript" are
          trademarks or registered trademarks of Oracle in the U.S. and other
          countries. However, the two programming languages have a very
          different syntax, semantic, and use.
        </div>
      </section>
      <section>
        <div className={classes.sticky}>JavaScript</div>
        <div className={classes.content}>
          JavaScript (JS) is a lightweight, interpreted, or just-in-time
          compiled programming language with first-class functions. While it is
          most well-known as the scripting language for Web pages, many
          non-browser environments also use it, such as Node.js, Apache CouchDB
          and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm,
          single-threaded, dynamic language, supporting object-oriented,
          imperative, and declarative (e.g. functional programming) styles. Read
          more about JavaScript. This section is dedicated to the JavaScript
          language itself, and not the parts that are specific to Web pages or
          other host environments. For information about API specifics to Web
          pages, please see Web APIs and DOM. The standard for JavaScript is
          ECMAScript. As of 2012, all modern browsers fully support ECMAScript
          5.1. Older browsers support at least ECMAScript 3. On June 17, 2015,
          ECMA International published the sixth major version of ECMAScript,
          which is officially called ECMAScript 2015, and was initially referred
          to as ECMAScript 6 or ES6. Since then, ECMAScript standards are on
          yearly release cycles. This documentation refers to the latest draft
          version, which is currently ECMAScript 2020. Do not confuse JavaScript
          with the Java programming language. Both "Java" and "JavaScript" are
          trademarks or registered trademarks of Oracle in the U.S. and other
          countries. However, the two programming languages have a very
          different syntax, semantic, and use. JavaScript (JS) is a lightweight,
          interpreted, or just-in-time compiled programming language with
          first-class functions. While it is most well-known as the scripting
          language for Web pages, many non-browser environments also use it,
          such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a
          prototype-based, multi-paradigm, single-threaded, dynamic language,
          supporting object-oriented, imperative, and declarative (e.g.
          functional programming) styles. Read more about JavaScript. This
          section is dedicated to the JavaScript language itself, and not the
          parts that are specific to Web pages or other host environments. For
          information about API specifics to Web pages, please see Web APIs and
          DOM. The standard for JavaScript is ECMAScript. As of 2012, all modern
          browsers fully support ECMAScript 5.1. Older browsers support at least
          ECMAScript 3. On June 17, 2015, ECMA International published the sixth
          major version of ECMAScript, which is officially called ECMAScript
          2015, and was initially referred to as ECMAScript 6 or ES6. Since
          then, ECMAScript standards are on yearly release cycles. This
          documentation refers to the latest draft version, which is currently
          ECMAScript 2020. Do not confuse JavaScript with the Java programming
          language. Both "Java" and "JavaScript" are trademarks or registered
          trademarks of Oracle in the U.S. and other countries. However, the two
          programming languages have a very different syntax, semantic, and use.
          JavaScript (JS) is a lightweight, interpreted, or just-in-time
          compiled programming language with first-class functions. While it is
          most well-known as the scripting language for Web pages, many
          non-browser environments also use it, such as Node.js, Apache CouchDB
          and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm,
          single-threaded, dynamic language, supporting object-oriented,
          imperative, and declarative (e.g. functional programming) styles. Read
          more about JavaScript. This section is dedicated to the JavaScript
          language itself, and not the parts that are specific to Web pages or
          other host environments. For information about API specifics to Web
          pages, please see Web APIs and DOM. The standard for JavaScript is
          ECMAScript. As of 2012, all modern browsers fully support ECMAScript
          5.1. Older browsers support at least ECMAScript 3. On June 17, 2015,
          ECMA International published the sixth major version of ECMAScript,
          which is officially called ECMAScript 2015, and was initially referred
          to as ECMAScript 6 or ES6. Since then, ECMAScript standards are on
          yearly release cycles. This documentation refers to the latest draft
          version, which is currently ECMAScript 2020. Do not confuse JavaScript
          with the Java programming language. Both "Java" and "JavaScript" are
          trademarks or registered trademarks of Oracle in the U.S. and other
          countries. However, the two programming languages have a very
          different syntax, semantic, and use.
        </div>
      </section>
    </div>
  );
};
export default StickyElementsPage;
