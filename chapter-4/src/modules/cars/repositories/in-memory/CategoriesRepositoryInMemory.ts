import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICategoryDTO } from "../ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  constructor(private categoriesRepository: Category[] = []) {}

  async findByName(name: string): Promise<Category> {
    const categorie = this.categoriesRepository.find(
      (category) => category.name === name
    );

    return categorie;
  }

  async list(): Promise<Category[]> {
    return this.categoriesRepository;
  }

  async create({ name, description }: ICategoryDTO): Promise<void> {
    const categorie = new Category();

    Object.assign(categorie, {
      name,
      description,
    });

    this.categoriesRepository.push(categorie);
  }
}

export { CategoriesRepositoryInMemory };
