import generateJWT from '../helpers/generateJWT';
import User from "../models/user";
import bcrypt from "bcryptjs";

const login = async(req, res) => {
  //res.send("User logged in successfully");
  try {
    const { email, password } = req.body;
     //verificar si existe el usuario con dicho email
     const user = await User.findOne({ email }); //devuelve null
     if(!user) res.status(404).json({ message: "User email or password incorrect - email" } );

     //confirmar si el password enviado es valido
     const correctPassword = bcrypt.compareSync(password, user.password);
     if(!correctPassword) res.status(404).json({ message: "User email or password incorrect - password" } );
    
     //generar el token 
     const token = await generateJWT(user._id, user.name);

    //si son correctos 
    res.status(200).json({ 
        message: "User email and password correct",
        userName: user.name,
        uid: user._id,
        token
    })
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "User log in failed" });
  }
};

const register = async (req, res) => {
 //res.send('User registered successfully')
  try {
    const { email, password } = req.body;

    //verificar que si el email existe
    const userFound = await User.findOne({ email });
    //si existe
    if (userFound)
      return res
        .status(400)
        .json({ message: "A user with this email already exists." });
    
    //crear el user
    let createUser = new User(req.body);
    
    //encrptar su password
    const SALT_ROUND = 10;
    createUser.password = await bcrypt.hash(password, SALT_ROUND);

    //generar el token 
    const token = await generateJWT(createUser._id, createUser.name);

    //guardar en BD
    await createUser.save();
    res.status(201).json({
      message: "User created successfully",
      userName: createUser.name,
      uid: createUser._id,
      token
    });
  } catch  {
    res.status(400).json({ message: "User registration failed" });
  }
};

export { login, register };
