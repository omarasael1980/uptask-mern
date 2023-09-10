import nodemailer from 'nodemailer';

export  const emailRegistro = async (datos)=>{
    const {email, nombre, token} =datos
    const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "7c7f2291e43ddc",
          pass: "a796c73b98b6ea"
        }
      });
      //informacion del email

      const info =  await   transport.sendMail({
            from: '"Uptask - Administrador de Proyectos" <cuentas@uptask.com>',
            to: email,
            subject : 'Uptask - Comprueba tu cuenta',
            text: 'Comprueba tu cuenta',
            html: `<p>Hola: ${nombre}, \n Comprueba tu cuenta en Uptask</p>
            <p>Tu cuenta ya está casi lista, solo debes comprobarla en el siguiente enlace:</p>
            <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
            <p>Si tu no creaste está cuenta ignora este mensaje</p>`,

      })
}