import mongoose from "mongoose"

const HeaderSchema = mongoose.Schema({
  links: {
    home: { type: String, required: true },
    about_us: { type: String, required: true },
    projects: { type: String, required: true },
    our_workflow: { type: String, required: true },
    contact: { type: String, required: true },
  },
})

// Home Schemmas
const MainTitleSchema = mongoose.Schema({
  title: { type: String, required: true },
  legend: { type: String, required: true },
})

const DevelopmentSchema = mongoose.Schema({
  title: { type: String, required: true },
  service_1: { type: String, required: true },
  service_2: { type: String, required: true },
  service_3: { type: String, required: true },
  service_4: { type: String, required: true },
  service_5: { type: String, required: true },
  service_6: { type: String, required: true },
})

const ServicesSchema = mongoose.Schema({
  label_section: { type: String, required: true },
  title_section: { type: String, required: true },
  development: { type: DevelopmentSchema, required: true },
})

const ProjectsSectionSchema = mongoose.Schema({
  title: { type: String, required: true },
  projects: { type: Map, of: String },
})


const HomeSchema = mongoose.Schema({
  main_title: { type: MainTitleSchema, required: true },
  services: { type: ServicesSchema, required: true },
  technologies: { type: Map, of: String }, 
  projects_section: { type: ProjectsSectionSchema, required: true },
  clutch: { type: String, required: true },
})

// Our Customters Schemmas
const TechStackSchemma = mongoose.Schema({
  tech_img: {type: String, required: true},
  tech_name: {type: String, required: true}
})

const ProjecsSchemma = mongoose.Schema({
  code: {type: String, required: true},
  color: {type: String, required: true},
  name: {type: String, required: true},
  img_logo: {type: String, required: true},
  img_page: {type: String, required: true},
  description: {type: String, required: true},
  long_description: {type: String, required: true},
  tech_stack: {type: [TechStackSchemma], required: true}
})

const OurCustomersSchemma = mongoose.Schema({
  title: {type: String, required: true},
  label: {type: String, required: true},
  projects: {type: [ProjecsSchemma], required: true}
})

// About Us Schemma
const AboutUsSchemma = mongoose.Schema({
  label: {type: String, required: true},
  title: {type: String, required: true},
  card: {type: String, required: true}
})

// Our Way Schemmas
const ItemsSchemma = mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  number: {type: Number, required: true},
})

const OurWaySchemma = mongoose.Schema({
  items:{type: [ItemsSchemma], required: true}
})

// Contact Schemma
const ContactSchemma = mongoose.Schema({
  title: {type: String, required: true},
  sub_title: {type: String, required: true},
})

// Footer Schemmas
const LinksSchemma = mongoose.Schema({
  about_us: {type: String, required: true},
  projects: {type: String, required: true},
  our_workflow: {type: String, required: true},
  contact: {type: String, required: true}
})

const FooterSchemma = mongoose.Schema({
  links:{type: LinksSchemma, required: true}
})

// Language Schemma
const LanguageSchemma = mongoose.Schema({
  header: {type: HeaderSchema, required: true},
  home: {type: HomeSchema, required: true},
  our_customers:{type: OurCustomersSchemma, required: true},
  about_us: {type: AboutUsSchemma, required: true},
  our_way:{type: OurWaySchemma, required: true},
  contact: {type: ContactSchemma, required: true},
  footer: {type: FooterSchemma, required: true}
})

export const LanguageModel = mongoose?.models?.Language || mongoose.model('Language', LanguageSchemma)