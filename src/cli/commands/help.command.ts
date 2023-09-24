import chalk from 'chalk';
import { Command } from './command.interface.js';

export class HelpCommand implements Command {
  public getName(): string {
    return '--help';
  }

  public async execute(..._parameters: string[]): Promise<void> {
    console.info(`
    ${chalk.blueBright('Программа для подготовки данных для REST API сервера.')}

    ${chalk.yellowBright('Пример: cli.js --<command> [--arguments]')}

    ${chalk.yellowBright('Команды:')}

    ${chalk.white('  --version:                   # выводит номер версии:')}
    ${chalk.whiteBright('  --help:                      # печатает этот текст:')}
    ${chalk.white('  --import <path>:             # импортирует данные из TSV:')}
    ${chalk.whiteBright('  --generate <n> <path> <url>  # генерирует произвольное количество тестовых данных')}
    `);
  }
}
